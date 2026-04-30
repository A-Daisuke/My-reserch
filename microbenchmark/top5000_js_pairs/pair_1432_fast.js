const Benchmark = {
    run: function() {
        var VAR_1 =
          '{ "name": "jack", "sex": "man","age":20,"skill":["css","html","javascript","c","java","c#"]}';
        var VAR_2 = 1000;
        for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
          var VAR_4 = eval("(" + VAR_1 + ")");
        }
    }
};