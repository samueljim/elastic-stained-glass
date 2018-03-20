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
					<link rel="icon" href="logo.png" type="image/x-icon"/>
					<meta name="theme-color" content="#673ab7" />
					<link rel="manifest" href="static/manifest.json" />
					{/* Import Roboto Font */}
					<link 
						rel="stylesheet" 
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
					/>
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
					<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/js/materialize.min.js" />
					<title>Glass app</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
