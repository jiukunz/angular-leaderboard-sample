var leaderBoardStatus = require('./vopopulator/leaderBoardStatus');
var leaderBoardController = function ($scope, $http, $interval, apiService) {
	refresh();
	$interval(function () {
		refresh();
	}, 10000);
	function refresh() {
		angular.element('#items').show();

		leaderBoardStatus($scope, 'hidden');
		leaderBoardStatus($scope, 'table-responsive', true);

		apiService.refresh(function(result){
			leaderBoardStatus($scope, 'table-responsive show-list-change', false, 'Error occurs when getting data from server!', result.data);
		});
	}
};

module.exports = leaderBoardController;