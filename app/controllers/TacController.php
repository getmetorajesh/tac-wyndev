<?php

class TacController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$input = Input::only('gender', 'age_group');
		//dd($input);
		$query = DB::table('tac')
							->select(DB::raw('count(*) as fatality_count, region'));
		if($input['gender']!="all" && $input['gender']){
			$query->where("gender",$input['gender']);
		}
		if($input['age_group']!="all" && $input['gender']){
			$query->where("age_group",$input['age_group']);
		}
		$query->groupBy('region');
		return $query->get();
	}


	public function indexNew()
	{
		$input = Input::only('gender', 'age_group');
		//dd($input);
		$query = DB::table('tac')
							->select(DB::raw('count(*) as fatality_count, region'));
		if($input['gender']!="all" && $input['gender']){
			$query->where("gender",$input['gender']);
		}
		if($input['age_group']!="all" && $input['gender']){
			$query->where("age_group",$input['age_group']);
		}
		$query->groupBy('region');
		return $query->get();
	}



	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}


}
