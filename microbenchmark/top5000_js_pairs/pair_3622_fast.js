const Benchmark = {
    run: function() {
        var VAR_1 = [
          "a",
          "alskdjflaskdjflj",
          "asldkfj alksdjf lasjkdf lkasjdflsdjfk",
          "aflskdjflk",
          "alksdfj laskdjflaksjdf laksj fdlkajs dflkjasdl fkjasldfkj sadlf",
        ];
        var VAR_2,
          VAR_3 = 0,
          VAR_4 = [];
        for (VAR_2 = 0; VAR_2 < 2000; VAR_2++) {
          VAR_4.push(VAR_1[VAR_3]);
          VAR_3 = (VAR_3 + 1) % VAR_1.length;
        }
        var VAR_6,
          VAR_7 = "";
        for (VAR_6 = 0; VAR_6 < VAR_4.length; VAR_6++) {
          VAR_7 += VAR_4[VAR_6];
        }
        if (VAR_7.length !== 50800) throw new Error("Error in test");
    }
};