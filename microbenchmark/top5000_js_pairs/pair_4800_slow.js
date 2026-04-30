const Benchmark = {
    run: function() {
        var VAR_1 = "some string here";
        var VAR_2 = " ";
        var VAR_3 = 150;
        var VAR_4 = [];
        for (var VAR_5 = 0; VAR_5 < VAR_3 - VAR_1.length; VAR_5++) VAR_4.push(VAR_2);
        VAR_4.push(VAR_1);
        VAR_6 = VAR_4.join("");
    }
};