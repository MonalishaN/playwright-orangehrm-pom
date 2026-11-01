import { expect, Page } from '@playwright/test';

export class PIMPage {
  private readonly pimMenu;
  private readonly addEmployeeBtn;
  private readonly firstName;
  private readonly lastName;
  private readonly saveBtn;

  constructor(private readonly page: Page) {
    this.pimMenu = page.getByRole('link', { name: 'PIM', exact: true });
    this.addEmployeeBtn = page.getByRole('link', {
      name: 'Add Employee',
      exact: true,
    });
    this.firstName = page.getByPlaceholder('First Name');
    this.lastName = page.getByPlaceholder('Last Name');
    this.saveBtn = page.getByRole('button', { name: 'Save', exact: true });
  }

  async navigateToPIM(): Promise<void> {
    await expect(this.pimMenu).toBeVisible();
    await this.page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule',
    );
    await expect(
      this.page.getByRole('heading', { name: 'PIM' }),
    ).toBeVisible();
  }

  async clickAddEmployee(): Promise<void> {
    await this.addEmployeeBtn.click();
    await expect(
      this.page.getByRole('heading', { name: 'Add Employee' }),
    ).toBeVisible();
  }

  async addEmployee(firstName: string, lastName: string): Promise<void> {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.saveBtn.click();
    await this.verifyEmployeeProfile(firstName, lastName);
  }

  async verifyEmployeeProfile(
    firstName: string,
    lastName: string,
  ): Promise<void> {
    await expect(this.page).toHaveURL(
      /\/pim\/viewPersonalDetails\/empNumber\/\d+$/,
    );
    await expect(
      this.page.getByRole('heading', { name: 'Personal Details' }),
    ).toBeVisible();
    await expect(this.firstName).toHaveValue(firstName);
    await expect(this.lastName).toHaveValue(lastName);
  }
}
