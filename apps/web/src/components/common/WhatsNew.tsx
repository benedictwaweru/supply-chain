/**--------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License. 
 * See LICENSE file in the project root for license information.
 ----------------------------------------------------------------------------------*/

import { useEffect, useRef, useState } from "react";

export function WhatsNew() {
	const [current, setCurrent] = useState(0);
	const textRef = useRef<HTMLSpanElement>(null);

	const whatsNewMessages = [
		{
			text: "Now listing commercial properties",
			href: "/commercial",
		},
		{
			text: "Smart filters: Search by price, size, more",
			href: "/search",
		},
		{
			text: "All-new mortgage calculator now live",
			href: "/tools/mortgage-calculator",
		},
		{
			text: "List your space in minutes",
			href: "/list-property",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % whatsNewMessages.length);
		}, 2000);

		return () => clearInterval(interval);
	}, [whatsNewMessages.length]);

	const { text, href } = whatsNewMessages[current];

	return (
		<div className="text-left whitespace-nowrap">
			<a className="inline-flex max-w-full space-x-6" href={href}>
				<span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm leading-6 font-semibold text-indigo-600 ring-1 ring-indigo-600/10 ring-inset">
					What's new
				</span>
				<span className="inline-flex items-center space-x-2 overflow-hidden text-sm leading-6 font-medium text-gray-600">
					<span className="max-w-full truncate" ref={textRef}>
						{text}
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						data-slot="icon"
						className="size-5 shrink-0 text-gray-400"
					>
						<path
							fill-rule="evenodd"
							d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
							clip-rule="evenodd"
						></path>
					</svg>
				</span>
			</a>
		</div>
	);
}
