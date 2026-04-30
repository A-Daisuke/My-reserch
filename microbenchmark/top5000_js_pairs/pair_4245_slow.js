const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) VAR_1.push("string" + VAR_2);
        var VAR_3 = new Set(VAR_1);
        var VAR_4 = [
          "string27",
          "string541",
          "string234",
          "string912",
          "string431",
          "string433",
          "string434",
          "string435",
        ];
        var VAR_5 = false;
        for (var VAR_6 of VAR_1) for (var VAR_7 of VAR_4) if (VAR_2 === VAR_7) VAR_5 = true;
    }
};