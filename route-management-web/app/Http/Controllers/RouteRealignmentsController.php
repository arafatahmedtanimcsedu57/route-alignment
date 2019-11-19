<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RouteRealignment;

class RouteRealignmentsController extends Controller
{
    public function index()
    {
        return response()->json(RouteRealignment::all());
    }
 
    public function show($routeRealignmentId)
    {
        return response()->json([RouteRealignment::find($routeRealignmentId)]);
    }

    public function store(Request $request)
    {
        $routeRealignment = RouteRealignment::create($request->all());
        return response()->json($routeRealignment, 200);
    }
 
    public function update(Request $request, $routeRealignmentId)
    {
        $route = RouteRealignment::findOrFail($routeRealignmentId);
        $route->update($request->all());
 
        return response()->json($routeRealignmentId, 200);
    }
 
    public function delete($routeRealignmentId)
    {
        RouteRealignment::find($routeRealignmentId)->delete();
 
        return response()->json(null, 204);
    }
 
}
