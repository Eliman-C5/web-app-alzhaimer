import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'

const config = defineConfig({
  projectId: 'dzds4vsu',
  dataset: 'production',
  title: 'alzhaimer web app',
  apiVersion: '2023-06-16',
  basePath: '/admin',
  plugins: [deskTool()],
})

export default config