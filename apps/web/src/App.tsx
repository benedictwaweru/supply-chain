/**--------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License. 
 * See LICENSE file in the project root for license information.
 ----------------------------------------------------------------------------------*/

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import Home from "@/pages/Home";
import LoginForm from "@/pages/Login";
import SignupForm from "@/pages/Signup";
import Terms from "@/pages/Terms";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/login",
		element: <LoginForm />
	},
	{
		path: "/signup",
		element: <SignupForm />
	},
	{
		path: "/terms-of-service",
		element: <Terms />
	},
	{
		path: "/privacy-policy",
		element: <PrivacyPolicy />
	}
]);

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<Toaster position="top-center" />
		</QueryClientProvider>
	);
}
