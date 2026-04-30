const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "default" };
        var VAR_2 = [];
        var VAR_3 = [];
        function FUNCTION_1(VAR_4) {
          this.VAR_5 = VAR_4 ? VAR_4 : {};
        }
        for (var VAR_6 = 0, VAR_7 = 1000; VAR_6 < VAR_7; VAR_6++) {
          var VAR_8 = new FUNCTION_1();
          VAR_3.push(VAR_8);
        }
    }
};