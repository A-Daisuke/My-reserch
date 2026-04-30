const Benchmark = {
    run: function() {
        var VAR_1 = [
          {
            KEY_1: function () {},
          },
          { KEY_2: "toto" },
        ];
        var VAR_2 = [
          {
            KEY_3: function () {},
          },
          {
            KEY_4: function () {},
          },
        ];
        for (var VAR_3 = 0, VAR_4 = VAR_1.length; VAR_3 < VAR_4; ++VAR_3) {
          var VAR_5 = VAR_1[VAR_3];
          if (VAR_5.KEY_1 instanceof Function) VAR_5.KEY_1();
        }
    }
};