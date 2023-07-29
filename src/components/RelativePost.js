import React, {useEffect} from "react";
import ItemMini from "./ItemMini";
import {useDispatch, useSelector} from "react-redux";
import {getNewPosts} from "../store/action/postAction";

const RelativePost = () => {
  const dispatch = useDispatch();
  const {newPosts} = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getNewPosts());
  }, []);

  return (
    <div className="w-full bg-white p-5 rounded-lg">
      <h3 className="text-[18px] font-bold mb-2">Tin mới đăng</h3>
      <div>
        {newPosts.map((item) => (
          <ItemMini
            key={item?.id}
            title={item?.title}
            time={item?.createdAt}
            price={item?.attributes?.price}
            image={JSON.parse(item?.images?.image)[0]}
            id={item?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default RelativePost;
