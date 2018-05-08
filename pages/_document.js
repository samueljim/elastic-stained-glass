import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
          <meta charset="utf-8"/>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<link rel="icon" href="logo.png" type="image/png"/>
					<meta name="theme-color" content="#ff0000" />
					<link rel="manifest" href="static/manifest.json" />
					{/* Import default styles */}
          <link
						rel="stylesheet"
						href="static/styles.css"
					/>
					<title>Glass app</title>
				</Head>
				<body>
          <noscript>
            You need to enable JavaScript to run this app.
          </noscript>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
