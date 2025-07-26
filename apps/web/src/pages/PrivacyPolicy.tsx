/**--------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License. 
 * See LICENSE file in the project root for license information.
 ----------------------------------------------------------------------------------*/

import { Header } from "@/components/common/Header";
import {} from "@/components/ui/button";
import { navigationLinks } from "@/types/types";

export default function PrivacyPolicy() {
	return (
		<>
			<Header navLinks={navigationLinks} />
			<main>
				<div className="mx-auto max-w-7xl px-4 pt-10 pb-24 sm:px-6 sm:pb-32 lg:flex lg:px-8 lg:py-32 lg:pb-48 flex flex-col space-y-16">
					<h1 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl 2xl:text-5xl">
						PRIVACY POLICY
					</h1>
					<p className="font-semibold">Last Updated: {`${new Date()}`}</p>
				</div>
			</main>
		</>
	);
}
