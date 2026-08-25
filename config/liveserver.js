import livereload from "livereload";
import connectLiveReload from "connect-livereload";
import path from "path";
import { fileURLToPath } from "url";

// This gets the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const liveServer = livereload.createServer();
liveServer.watch(path.join(__dirname, "../public"));

liveServer.server.once("connection", () => {
    setTimeout(() => {
        liveServer.refresh("/");
    },100)
});

export default connectLiveReload