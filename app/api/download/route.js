import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const filePath = path.join(process.cwd(), "public", "resume.pdf"); // Path to your file
    const fileName = "Adam Ryu - Software Engineer.pdf";

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return new NextResponse("File not found", { status: 404 });
    }

    const contentTypeMap = {
        svg: "image/svg+xml",
        ico: "image/x-icon",
        png: "image/png",
        jpg: "image/jpeg",
        pdf: "application/pdf",
    };

    const fileExtension = fileName.split(".").pop().toLowerCase();
    const contentType = contentTypeMap[fileExtension] || "application/octet-stream";

    // Read file contents
    const fileBuffer = await fs.promises.readFile(filePath);

    // Create and return the response
    return new NextResponse(fileBuffer, {
        headers: {
            'Content-Disposition': `attachment; filename="${fileName}"`,
            'Content-Type': contentType,
        },
    });
}