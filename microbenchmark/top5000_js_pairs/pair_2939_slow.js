const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        function FUNCTION_1(VAR_3) {
          this.VAR_4 = VAR_3 ? VAR_3 : {};
        }
        for (var VAR_5 = 0, VAR_6 = 1000; VAR_5 < VAR_6; VAR_5++) {
          var VAR_7 = new FUNCTION_1();
          VAR_2.push(VAR_7);
        }
    }
};