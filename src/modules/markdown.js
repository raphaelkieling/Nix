import fs from 'fs';
import marked from 'marked';

class MarkdownModule {
    constructor() {
        this.accept = /md/g
    }

    getResponseHTML(content) {
        return `
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <html>
                <head>
                    <link rel="stylesheet" href="/github/github-markdown.css">
                    <style>
                        body {
                            box-sizing: border-box;
                            min-width: 200px;
                            max-width: 980px;
                            margin: 0 auto;
                            padding: 45px;
                        }
                    </style>
                </head>
                <body class="markdown-body">
                    ${marked(content)}
                </body>
            </html>
        `
    }

    async resolve(filepath, { req, res }) {
        let content = await fs.readFileSync(filepath)
        res.send(this.getResponseHTML(content.toString()));
    }
}

export default new MarkdownModule();