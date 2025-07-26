/**--------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License. 
 * See LICENSE file in the project root for license information.
 ----------------------------------------------------------------------------------*/

import { z } from "zod";

const PASSWORD_MIN_LENGTH = 8;

export const baseFormSchema = z.object({
	fullName: z.string(),
	username: z.string().toLowerCase(),
	email: z.email({ error: `Please enter a valid email address` }),
	password: z
		.string()
		.min(PASSWORD_MIN_LENGTH, {
			error: `Password must be at least ${PASSWORD_MIN_LENGTH} long`,
		})
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
			`Password must include uppercase and lowercase letters, numbers, and special characters`
		),
	confirmPassword: z.string(),
	code: z.string(),
});

export const loginFormSchema = baseFormSchema.pick({
	email: true,
	password: true,
});

export const signupFormSchema = loginFormSchema;

export const navigationLinks = [
	{ href: "#", label: "Home" },
	{
		label: "Features",
		submenu: true,
		type: "description",
		items: [
			{
				href: "#",
				label: "Components",
				description: "Browse all components in the library.",
			},
			{
				href: "#",
				label: "Documentation",
				description: "Learn how to use the library.",
			},
			{
				href: "#",
				label: "Templates",
				description: "Pre-built layouts for common use cases.",
			},
		],
	},
	{
		label: "Pricing",
		submenu: true,
		type: "simple",
		items: [
			{ href: "#", label: "Product A" },
			{ href: "#", label: "Product B" },
			{ href: "#", label: "Product C" },
			{ href: "#", label: "Product D" },
		],
	},
	{
		label: "About",
		submenu: true,
		type: "icon",
		items: [
			{ href: "#", label: "Getting Started", icon: "BookOpenIcon" },
			{ href: "#", label: "Tutorials", icon: "LifeBuoyIcon" },
			{ href: "#", label: "About Us", icon: "InfoIcon" },
		],
	},
];

export type NavigationLink = typeof navigationLinks;
