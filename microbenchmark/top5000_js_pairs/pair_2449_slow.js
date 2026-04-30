const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = "5*Math.pow(2,i)+5*Math.pow(i,2)+10";
        var VAR_3 = new Function("i", "return 5*Math.pow(2,i)+5*Math.pow(i,2)+10");
        for (var VAR_4 = 0; VAR_4 < VAR_1; VAR_4++) {
          VAR_3(VAR_4);
        }
    }
};