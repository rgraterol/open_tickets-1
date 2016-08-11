app.controller('IndexCtrl', function($scope, $http){

	$scope.asc = true;

	$scope.order_by = function(criteria, order) {
		if(order === 'asc') {
			$scope.asc = false;
			$scope.desc = true;
		} else {
			$scope.asc = true;
			$scope.desc = false;
		}
		url = '/tickets/order_by';
		payload = {criteria: criteria, order: order};
		$http.post(url, payload)
		.success( function(response){
			$('#tbody_tickets').html('');
			$('#tbody_tickets').html(response);
		}).error( function(response) {
			console.log(response);
		});
	};

});