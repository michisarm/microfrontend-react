
echo "container build"
yarn install
yarn build
echo "container build is ok"

echo "app1 build"
cd app1
yarn install
yarn build
cp -rf build ../build/app1
cd ../
echo "app1 build is ok"

echo "app2 build"
cd app2
yarn install
yarn build
cp -rf build ../build/app2
cd ../
echo "app2 build is ok"

echo "product finish"
