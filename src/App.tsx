import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as ReactDOMClient from 'react-dom/client'
import FrontPage from './components/frontpage'
import ArticlePage from './components/articlepage'

globalThis.React = React;
globalThis.ReactDOMServer = ReactDOMServer;
globalThis.ReactDOMClient = ReactDOMClient;
globalThis.Components = {FrontPage, ArticlePage};