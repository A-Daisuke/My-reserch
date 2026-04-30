const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(Math.random().toString(36).substring(2));
        }
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          VAR_3.push(new RegExp(VAR_1[VAR_2]));
        }
        for (var VAR_5 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          new RegExp(VAR_1[VAR_2]).test("abcdef");
          new RegExp(VAR_1[VAR_2]).test("aab");
          new RegExp(VAR_1[VAR_2]).test("0");
          new RegExp(VAR_1[VAR_2]).test("lol");
        }
    }
};