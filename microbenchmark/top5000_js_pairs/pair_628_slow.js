const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        var VAR_2;
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3 += 1) {
          VAR_2 = new Array();
          VAR_2[0] = "Sunday";
          VAR_2[1] = "Monday";
          VAR_2[2] = "Tuesday";
          VAR_2[3] = "Wednesday";
          VAR_2[4] = "Thursday";
          VAR_2[5] = "Friday";
          VAR_2[6] = "Saturday";
        }
    }
};