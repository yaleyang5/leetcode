class Solution {
public:
    bool isRobotBounded(string instructions) {
        auto ret = parse_instructions(instructions);
        pair<int, int> pos = ret.first;
        int dir = ret.second;
        
        return (pos.first == 0 && pos.second == 0) || dir != 1;
    }
    
    // enum Direction {
    //     west = 0,
    //     north = 1,
    //     east = 2,
    //     south = 3
    // };
    
    pair<pair<int, int>, int> parse_instructions(string instructions) {
        // cout << "parsing instructions " << instructions << endl;
        pair<int, int> pos = make_pair(0, 0);
        int dir = 1;
        
        for (int i = 0; i < instructions.length(); i++) {
            // cout << "(" << pos.first << ", " << pos.second << ") : " << dir << endl;
            switch(instructions[i]) {
                case 'G':
                    if (dir % 2 == 0) {
                        pos.first += (dir - 1);
                    } else {
                        pos.second += (dir - 2);
                    }
                    
                    break;
                case 'L':
                    dir = (dir + 1) % 4;
                    break;
                case 'R':
                    dir = (dir + 3) % 4;
                    
            }
        }
        
        return make_pair(pos, dir);
    }
};