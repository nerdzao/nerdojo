import numpy as np

n = 5
M = np.random.randint(0, 9, (n,n))
shift = 5

M = np.array([
    [2,1,1,1,1],
    [1,2,1,1,1],
    [1,1,2,1,1],
    [1,1,1,2,1],
    [1,1,1,1,2]
])
print(M)

max_val = 0
seq = ()

for x in range(0, n - shift):
    for y in range(0, n - shift):
x
        if np.prod(M[x: x+5, y]) > max_val:
            max_val = M[x: x+5, y]

        if np.prod(M[x, y: y+5]) > max_val:
            max_val = M[x, y: y+5]

        di = np.diag_indices(5)
        di[0] += x
        di[1] += y

        if np.prod(M[di]) > max_val:
            max_val = np.prod(M[di])

print(max_val)
