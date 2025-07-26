/**--------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License. 
 * See LICENSE file in the project root for license information.
 ----------------------------------------------------------------------------------*/

import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

import { navigationLinks } from "@/types/types";

export default function Home() {
	return (
		<>
			<Header navLinks={navigationLinks} />
			<main>
			</main>
			<Footer />
		</>
	);
}
