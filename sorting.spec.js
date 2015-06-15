describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it ('sorts an array', function(){
    	expect( bubbleSort([9,18,100,0,3])).toEqual([0,3,9,18,100])
    })
    it ('swaps 2 times for the given array', function(){
    	spyOn(window, 'swap').andCallThrough();
    	bubbleSort([3,1,2]);
    	expect(swap.callCount).toEqual(2);
    })
});


describe('Merge Sort', function(){
    it('is able to merge two sorted arrays', function(){
        expect(merge([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6])
    });
    it('is able to merge two sorted arrays', function(){
        expect(split([1,2,3])).toEqual([[1],[2,3]])
    });
    it ('is able to merge-sort an array', function(){
    	expect(mergeSort([2,1,4,3])).toEqual([1,2,3,4]);
    })


});