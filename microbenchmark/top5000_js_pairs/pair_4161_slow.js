const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; ++VAR_2) {
          VAR_1.push({ KEY_1: Math.floor(Math.random() * 10000) + "" });
        }
        VAR_1[5000] = { KEY_2: "12345" };
        VAR_3 = "12345";
        var VAR_4 = VAR_1.filter(function (VAR_5) {
          if (VAR_5.KEY_1 === VAR_3) {
            return true;
          }
          return false;
        })[0];
    }
};