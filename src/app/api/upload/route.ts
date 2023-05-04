import {NextResponse} from "next/server";
import {writeFile} from "fs/promises";
import path from "path";
import fs from "fs";


enum ContentType {
    JSON = "application/json",
    TEXT = "text/plain",
}

export async function POST(request: Request) {
    try {
        const data = await request.formData();
        const file = await data.get("file") as File || new File([], "empty");

        if (file.size === 0) {
            return createResponse("File is empty", 400);
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = path.join(process.cwd(), "public", file.name);

        if (await fileExists(filePath)) {
            return createResponse("File already exists", 409);
        }

        await writeFile(filePath, buffer);

        return createResponse("File uploaded", 200);
    } catch (e) {
        return createResponse(`Internal error while uploading file`, 500);
    }
}

async function fileExists(filePath: string): Promise<boolean> {
    try {
        return fs.statSync(filePath).isFile();
    } catch (e) {
        return false;
    }
}

function createResponse(message: string, status: number, type: ContentType = ContentType.JSON) {
    return new NextResponse(JSON.stringify({
        message: message,
    }), {
        status: status,
        headers: {
            "Content-Type": type,
        }
    });
}

