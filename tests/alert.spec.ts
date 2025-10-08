import { test, expect } from '@playwright/test'
import { log } from 'console';

test(`Handling alert using page.on method..`, async ({ page }) => {

    page.on("dialog", async (dialog) => {
        const msg = dialog.message();
        console.log(msg);
        await dialog.accept();

    })

    //handling simple alert=>using page.on
    await page.goto("https://www.leafground.com/alert.xhtml");
    const simpleAlert = page.locator(".card").filter({ has: page.locator("//h5[text()=' Alert (Simple Dialog)']") });
    await page.pause();
    await simpleAlert.locator("button11").click();
    await page.waitForTimeout(4000);

    //handling confirmation alert using page.on
    const confirmationAlert = page.locator(".card").filter({ has: page.locator("//h5[text()=' Alert (Confirm Dialog)']") });
    await confirmationAlert.locator("button").click();
    await page.waitForTimeout(4000);

})
