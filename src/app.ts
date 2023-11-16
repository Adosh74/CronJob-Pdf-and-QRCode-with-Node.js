import express from 'express';

export const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
