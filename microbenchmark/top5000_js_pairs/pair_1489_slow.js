const Benchmark = {
    run: function() {
        var VAR_1 = {};
        VAR_1.VAR_2 =
          /^(h1|h2|h3|h4|html|imageurl|indexedh2|instructional|stagehead|stagesubhead|instruction|instructionstart|instructionstop|processlink|sapcode)$/;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.VAR_2.test("sapcode");
          VAR_1.VAR_2.test("nopcode");
        }
    }
};