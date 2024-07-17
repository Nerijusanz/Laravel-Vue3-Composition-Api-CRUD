<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Company;
use App\Http\Requests\CompanyStoreApiRequest;
use App\Http\Resources\CompanyApiResource;

class CompanyApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CompanyApiResource::collection(Company::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CompanyStoreApiRequest $request)
    {
        $company = Company::create($request->validated());

        return new CompanyApiResource($company);
    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company)
    {
        return new CompanyApiResource($company);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CompanyStoreApiRequest $request, Company $company)
    {
        $company->update($request->validated());

        return new CompanyApiResource($company);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company)
    {
        $company->delete();

        return response()->noContent();
    }
}
