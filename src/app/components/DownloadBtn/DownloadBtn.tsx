"use client"

const DownloadBtn = ({ url, name }: { url: string, name: string }) => {

    const mimeTypes: { [key: string]: string } = {
        'png': 'image/png',
        'jpg': 'image/jpeg',
        'webp': 'image/webp',
        'svg': 'image/svg+xml'
    };

    const downloadImage = (format: string) => {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {

                const filename = `${name}.${format}`;

                const blobWithMime = new Blob([blob], { type: mimeTypes[format] || 'application/octet-stream' });
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blobWithMime);
                
                a.download = filename;
                a.rel = 'noopener noreferrer';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

            })
            .catch(e => console.error("Error downloading the image:", e));
    }

    return (
        <div className="order-2 sm:order-3 col-span-1 row-span-1 flex justify-center gap-3 flex-wrap items-center xl:px-[50px]">
            {['png', 'jpg', 'webp', 'svg'].map((ext) => (
                <div key={ext} className="text-black border-[2px] border-black rounded-lg hover:bg-black hover:text-white transition duration-150 ease-in-out flex-1 bg-white">
                    <button className="py-[14px] px-[30px] rounded-lg flex gap-2 items-center justify-center w-full" onClick={() => downloadImage(ext)}>
                        <p className="text-[15px]">{ext.toUpperCase()}</p>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default DownloadBtn
