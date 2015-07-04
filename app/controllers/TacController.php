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
	//	dd($input);
		$query = DB::table('tac')
							->select(DB::raw('count(*) as fatality_count, region'));
		if($input['gender']!="all" && isset($input['gender'])){
			$query->where("gender",$input['gender']);
		}
		if($input['age_group']!="all" && isset($input['age_group'])){
			$query->where("age_group",$input['age_group']);
		}
		$query->groupBy('region')->orderBy("fatality_count","DESC");
		return $query->get();
	}


	public function riskProfile()
	{
		$input = Input::only('gender', 'age_group');
		//dd($input);
		$group_params = ['area_type','day_type','time_type','age_type','road_crash_type'];
		$result = [];
		foreach ($group_params as $group_param) {
			$query = DB::table('tac')
								->select(DB::raw("count($group_param) as fatality_count, $group_param"));
			if($input['gender']!="all" && $input['gender']){
				$query->where("gender",$input['gender']);
			}
			if($input['age_group']!="all" && $input['age_group']){
				$query->where("age_group",$input['age_group']);
			}

				$query->groupBy($group_param)->orderBy('fatality_count', 'DESC');
				$res = $query->first();
				//dd($res);
				$result[$group_param]=$res;
		}

		return $result;
	}

	public function graph()
	{
		$input = Input::only('gender', 'age_group');
		$query = DB::table('result_set')
							->select("*");
		if($input['gender']!="all" && isset($input['gender'])){
			$query->where("gender",$input["gender"]);
		}
		if($input['age_group']!="all" && $input['age_group']!=0){
			$query->where("age",$input['age_group']);
		}

		$query->orderBy('year', 'ASC');
		$res = $query->get();
		return $res;
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
