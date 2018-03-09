import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<html style={{ background: '#EEE', color: '#444' }}>
				<Head>
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
					/>
					<meta name="theme-color" content="#673ab7" />
					<link rel="manifest" href="static/manifest.json" />
					{/* Import Google Icon Font */}
					<link 
						rel="stylesheet"
						href="https://fonts.googleapis.com/icon?family=Material+Icons" 
					/>
					{/* Import materialize.css */}
					<link 
						rel="stylesheet" 
						href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/css/materialize.min.css"
					/>
					<title>Glass app</title>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script defer src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/js/materialize.min.js" />
				</body>
			</html>
		)
	}
}
