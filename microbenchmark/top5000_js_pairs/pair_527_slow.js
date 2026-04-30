const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({
            KEY_1: "Name" + VAR_2,
            KEY_2: VAR_2.toString(),
          });
        }
        var VAR_3 = "876";
        var VAR_4 = [];
        var VAR_5 = JSON.stringify(VAR_1);
        var VAR_6 = new RegExp(
          '({"Name":"Name' + VAR_3 + '")|("Phone":"' + VAR_3 + '"})',
        );
        var VAR_7 = VAR_6.exec(JSON.stringify(VAR_1));
        if (VAR_7) VAR_4.push(VAR_7["index"]);
    }
};