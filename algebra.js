

/**
 * Умножение 3-мерной матрицы на 3-мерный вектор.
 * @param {Matrix3D} matrix 
 * @param {Vector3D} vector 
 * @returns {Vector3D}
 */
function matxvec(matrix, vector)
{
    let result = []
    if (matrix.length == 3)
    {
        result.push(matrix[0][0] * vector[0] + matrix[0][1] * vector[1] + matrix[0][2] * vector[2]);
        result.push(matrix[1][0] * vector[0] + matrix[1][1] * vector[1] + matrix[1][2] * vector[2]);
        result.push(matrix[2][0] * vector[0] + matrix[2][1] * vector[1] + matrix[2][2] * vector[2]);
    }

    if (matrix.length == 9)
    {
        result.push(matrix[0] * vector[0] + matrix[1] * vector[1] + matrix[2] * vector[2]);
        result.push(matrix[3] * vector[0] + matrix[4] * vector[1] + matrix[5] * vector[2]);
        result.push(matrix[6] * vector[0] + matrix[7] * vector[1] + matrix[8] * vector[2]);
    }

    return result;
}
/**
 * Сложить два вектора.
 * @param {Vector3D} a 
 * @param {Vector3D} b 
 * @returns {Vector3D} 
 */
function sumvecs(a, b)
{
    let result = [];
    a.forEach(function (e, idx) {
        result.push(e + b[idx]);
    });
    return result;
}

/**
 * Сложить массив векторов.
 * @param {Vector3D[]} array 
 * @returns {Vector3D}
 */

function sumarrayofvecs(array)
{
    let result = [0, 0, 0];
    for (let vec = 0; vec < array.length; vec++)
    {
        result = sumvecs(result, array[vec]);
    }

    return result;
}

/**
 * Диагональная матрица с заданным значением на диагонали.
 * @param {Number} a 
 * @returns {Matrix3D}
 */
function diag(a)
{
    return [a, 0, 0, 0, a, 0, 0, 0, a];
}

/**
 * Разница векторов.
 * @param {Vector3D} a 
 * @param {Vector3D} b 
 * @returns {Vector3D}
 */
function difvecs(a, b)
{
    let result = [];
    a.forEach(function (e, idx) {
        result.push(e - b[idx]);
    });
    return result;
}

/**
 * Умножение блочно-диагональной матрицы, представленной как массив
 * 3-мерных матриц, на массив векторов.
 * @param {Matrix3D[]} bdm 
 * @param {Vector3D[]} vector 
 * @returns {Vector3D[]} 
 */
function bdmxvec(bdm, vector)
{
    let result = [];

    for (let i = 0; i < bdm.length; i++)
        result.push(matxvec(bdm[i], vector[i]));
    
    return result;
}

/**
 * Умножение числа на вектор.
 * @param {Number} num 
 * @param {Vector3D} vector 
 * @returns {Vector3D}
 */

function numxvec(num, vector)
{
    let result = [];
    vector.forEach(function (e) {
        result.push(num * e);
    });
    return result;
}

/**
 * Скалярное произведение векторов.
 * @param {Vector3D} a 
 * @param {Vector3D} b 
 * @returns {Number}
 */

function dot(a, b)
{
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Длина вектора.
 * @param {Vector3D} x 
 * @returns {Number} 
 */
function length(x)
{
    return Math.sqrt(dot(x, x));
}

/**
 * Векторное произведение векторов.
 * @param {Vector3D} a 
 * @param {Vector3D} b 
 * @returns {Vector3D}
 */
function cross(a, b)
{
    return ([a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]);
}

//--------------------------------------------------taken from MDN

/**
 * Перемножить 2 матрицы.
 * @param {Matrix3D} a 
 * @param {Matrix3D} b 
 * @returns {Matrix3D} 
 */
function multiplyMatrices(a, b) 
{
  
    
    var result = [];
    
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    result[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    result[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    result[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    result[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
  
    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    result[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    result[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    result[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    result[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
  
    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    result[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    result[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    result[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    result[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
  
    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    result[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    result[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    result[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    result[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
  
    return result;
  }
/**
 * Перемножить массив матриц.
 * @param {Matrix3D[]} matrices 
 * @returns {Matrix3D}
 */
function multiplyArrayOfMatrices(matrices) 
{
    var inputMatrix = matrices[0];

    for(var i=1; i < matrices.length; i++)
        inputMatrix = multiplyMatrices(inputMatrix, matrices[i]);

    return inputMatrix;
}

/**
 * Построить матрицу, поворачивающую 4 мерный вектор вокруг оси X на заданный угол.
 * @param {Number} a Угол.
 * @returns {Matrix4D}
 */
function rotateXMatrix(a) 
{
    var cos = Math.cos;
    var sin = Math.sin;

    return [
            1,       0,        0,     0,
            0,  cos(a),  -sin(a),     0,
            0,  sin(a),   cos(a),     0,
            0,       0,        0,     1
    ];
}

/**
 * Построить матрицу, поворачивающую 4 мерный вектор вокруг оси Y на заданный угол.
 * @param {Number} a Угол.
 * @returns {Matrix4D}
 */
function rotateYMatrix(a) 
{
    var cos = Math.cos;
    var sin = Math.sin;

    return [
        cos(a),   0, sin(a),   0,
            0,   1,      0,   0,
        -sin(a),   0, cos(a),   0,
            0,   0,      0,   1
    ];
}

/**
 * Построить матрицу, поворачивающую 4 мерный вектор вокруг оси Z на заданный угол.
 * @param {Number} a Угол.
 * @returns {Matrix4D}
 */
function rotateZMatrix(a) 
{
    var cos = Math.cos;
    var sin = Math.sin;

    return [
        cos(a), -sin(a),    0,    0,
        sin(a),  cos(a),    0,    0,
            0,       0,    1,    0,
            0,       0,    0,    1
    ];
}

/**
 * Матрица переноса. Переносит первые 3 компоненты на (x, y, z), если 4 компонента равна 1.
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} z 
 * @returns {Matrix4D} 
 */
function translateMatrix(x, y, z) 
{
    return [
        1,    0,    0,   0,
        0,    1,    0,   0,
        0,    0,    1,   0,
        x,    y,    z,   1
    ];
}

/**
 * Матрица масштабирования.
 * @param {Number} w 
 * @param {Number} h 
 * @param {Number} d 
 * @returns {Matrix4D}
 */
function scaleMatrix(w, h, d) 
{
    return [
        w,    0,    0,   0,
        0,    h,    0,   0,
        0,    0,    d,   0,
        0,    0,    0,   1
    ];
}

/**
 * 
 * @param {Number} fieldOfViewInRadians Угол в радианах.
 * @param {Number} aspectRatio Соотношение сторон.
 * @param {Number} near 
 * @param {Number} far 
 * @returns {Matrix4D}
 */
function perspectiveMatrix(fieldOfViewInRadians, aspectRatio, near, far) 
{

    var f = 1.0 / Math.tan(fieldOfViewInRadians / 2);
    var rangeInv = 1 / (near - far);

    return [
        f / aspectRatio, 0,                          0,   0,
        0,               f,                          0,   0,
        0,               0,    (near + far) * rangeInv,  -1,
        0,               0,  near * far * rangeInv * 2,   0
    ];
}

/**
 * 
 * @param {Number} left 
 * @param {Number} right 
 * @param {Number} bottom 
 * @param {Number} top 
 * @param {Number} near 
 * @param {Number} far 
 * @returns {Matrix4D}
 */
function orthographicMatrix(left, right, bottom, top, near, far)
{
    // Each of the parameters represents the plane of the bounding box

    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
        
    var row4col1 = (left + right) * lr;
    var row4col2 = (top + bottom) * bt;
    var row4col3 = (far + near) * nf;

    return [
        -2 * lr,        0,        0, 0,
                0,  -2 * bt,        0, 0,
                0,        0,   2 * nf, 0,
        row4col1, row4col2, row4col3, 1
    ];
}