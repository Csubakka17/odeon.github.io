import React from "react";
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { CartProvider } from '../src/global/components/CartContext';


function mountReact() {

    const rootEl = document.getElementById('root');

    const root = createRoot( rootEl );

    root.render(
        <React.StrictMode>

            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
            
        </React.StrictMode>
    );
}

mountReact();
