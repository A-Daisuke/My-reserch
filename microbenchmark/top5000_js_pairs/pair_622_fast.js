const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = "AAAAAAAAAAAAAAAAAAAA";
        }
        var VAR_4 = { KEY_1: "AAAAAAAAAAAAAAAAAAAA" };
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_2.push(VAR_4);
        }
    }
};