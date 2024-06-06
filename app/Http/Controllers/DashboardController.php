<?php

namespace App\Http\Controllers;

use App\Traits\Permission;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    use Permission;

    public function index()
    {
        if (!$this->check_permission('dashboard-view')) {
            return Inertia::render('Error/AccessDenied');
        }

        return Inertia::render('Dashboard/Index');
    }
}
