import React, {useEffect} from "react";
import Button from "../../components/Button";
import Item from "../../components/Item";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/action/postAction";

const List = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="w-full h-full bg-white rounded-lg">
      <div>
        <div className="p-4">
          <div>
            <h2 className="text-[18px] font-bold ">Danh sách tin đăng</h2>
          </div>

          <div className="flex items-center gap-3 py-2">
            <span>Sắp xếp: </span>
            <Button
              text={"Mặc định"}
              bgColor={"bg-greyButton"}
              styleOther={"hover:underline"}
            />
            <Button
              text={"Mới nhất"}
              bgColor={"bg-greyButton"}
              styleOther={"hover:underline"}
            />
          </div>
        </div>

        <div>
          {posts.length > 0 &&
            posts.map((item) => (
              <Item
                key={item?.id}
                address={item?.address}
                attributes={item?.attributes}
                description={item?.description}
                images={JSON.parse(item?.images?.image)}
                star={+item?.star}
                title={item?.title}
                user={item?.user}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
