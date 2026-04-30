const Benchmark = {
    run: function() {
        FUNCTION_1 = (VAR_1) => {
          VAR_2 = {};
          for (VAR_3 of VAR_1) VAR_2[VAR_3] = -~VAR_2[VAR_3];
          for (VAR_3 in VAR_2) if (VAR_2[VAR_3] == 1) return VAR_3;
          return "_";
        };
        FUNCTION_1(
          "ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof",
        );
    }
};