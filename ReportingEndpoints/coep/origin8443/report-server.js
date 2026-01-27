const http = require('http');
const PORT = 3000; // Consider changing to 3000 if 8443 stays busy

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Health Check for your browser
    if (req.method === 'GET') {
        res.writeHead(200);
        res.end('Server is up! Send reports to /report-handler');
        return;
    }

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.method === 'POST' && req.url === '/report-handler') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            console.log('\n--- New Report Received [' + new Date().toLocaleTimeString() + '] ---');
            try {
                const json = JSON.parse(body);
                console.dir(json, { depth: null, colors: true });
            } catch (e) {
                console.log('Body:', body);
            }
            res.writeHead(204); // 204 is standard for reporting
            res.end();
        });
    }
});

server.listen(PORT, () => {
    console.log(`Report Collector running at http://localhost:${PORT}/report-handler`);
});