<?php
function notice($page){
	switch ($page){
		case 'auth':
			switch ($_COOKIE['notice']){
				case 'df_reg_200':
					return ['subject'=>'Registration Successful ', 'message'=>'Congraturalation, You have successfuly registered, Go home','button'=>' Go Home', 'link'=>'/home'];
					break;
				case 'df_reg_209':
					return ['subject'=>'Registration Unsuccesful', 'message'=>'Registration was unsuccesful, Try Again ', 'button'=>'Try Again', 'link'=>'/register'];
					break;
				case 'df_reg_201':
					return ['subject'=>'Registration Unsuccesful', 'message'=>'Username used is already registered on our system','button'=>'Try Again', 'link'=>'/register'];
					break;
				case 'df_reg_202':
					return ['subject'=>'Registration Unsuccesful', 'message'=>'Email used is already registered on our system','button'=>'Try Again', 'link'=>'/register'];
					break;
				case 'df_log_200':
					return ['subject'=>'Succesfully Authenticated', 'message'=>'You have succesfully loged in to your Account', 'button'=>'Proceed', 'link'=>'/home'];
					break;
				case 'df_log_201':
					return ['subject'=>'Authentication Failed', 'message'=>'Could not authorize credentials provided','button'=>'Try Again', 'link'=>'/login'];
					break;
				default:
					return ['subject'=>'No Request', 'message'=>'No authentication request was Made','button'=>'Go Home', 'link'=>'/home'];
			}
		default:
			return ['subject'=>'Oppsie', 'message'=>'seems you\'re trying to be a genius','button'=>'Go Home', 'link'=>'/home'];
	}
}