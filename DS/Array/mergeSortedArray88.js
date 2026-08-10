
// Q)88 Merge sorder array



let nums1 = [4, 5, 6, 0, 0, 0];
let m = 3;
let nums2 = [1,2,3];
let n = 3;

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let writeIndex = m + n - 1;

  while (i>=0&&j >= 0) {
    if ( nums1[i] > nums2[j]) {
      nums1[writeIndex--] = nums1[i--];
    } else {
      nums1[writeIndex--] = nums2[j--];
    }
  }
  while (j >= 0) {
    nums1[writeIndex--] = nums2[j--];
  }
  return nums1;
};

console.log(merge(nums1, m, nums2, n));
