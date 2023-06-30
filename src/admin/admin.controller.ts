import { Controller, Get, Injectable } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getAllUsers() {
    return this.adminService.getAllUsers();
  }
}
