<?php
namespace Opencart\Catalog\Controller\Extension\Opencart\Module;
use \Opencart\System\Helper AS Helper;
class Special extends \Opencart\System\Engine\Controller {
	public function index(array $setting): string {
		// $this->load->language('extension/opencart/module/special');

		$this->load->model('catalog/product');
		$this->load->model('tool/image');

		$lang = $this->config->get('config_language');
		if ($lang == 'uk-ua')     $data['heading_title'] = $setting['ua'];
		elseif ($lang == 'en-gb') $data['heading_title'] = $setting['en'];

		$data['products'] = [];

		$filter_data = [
			'sort'  => 'pd.name',
			'order' => 'ASC',
			'start' => 0,
			'limit' => $setting['limit']
		];

		$results = $this->model_catalog_product->getSpecials($filter_data);

		if ($results) {
			foreach ($results as $result) {
				if ($result['image']) {
					$image = $this->model_tool_image->resize(html_entity_decode($result['image'], ENT_QUOTES, 'UTF-8'), $setting['width'], $setting['height']);
				} else {
					$image = $this->model_tool_image->resize('placeholder.png', $setting['width'], $setting['height']);
				}

				if ($this->customer->isLogged() || !$this->config->get('config_customer_price')) {
					// $price = $this->currency->format($this->tax->calculate($result['price'], $result['tax_class_id'], $this->config->get('config_tax')), $this->session->data['currency']);
					$price = $this->tax->calculate($result['price'], $result['tax_class_id'], $this->config->get('config_tax'));
				} else {
					$price = false;
				}

				if ((float)$result['special']) {
					// $special = $this->currency->format($this->tax->calculate($result['special'], $result['tax_class_id'], $this->config->get('config_tax')), $this->session->data['currency']);
					$special = $this->tax->calculate($result['special'], $result['tax_class_id'], $this->config->get('config_tax'));
				} else {
					$special = false;
				}

				if ($this->config->get('config_tax')) {
					// $tax = $this->currency->format((float)$result['special'] ? $result['special'] : $result['price'], $this->session->data['currency']);
					$tax = (float)$result['special'] ? $result['special'] : $result['price'];
				} else {
					$tax = false;
				}

				$product_data = [
					'product_id'  => $result['product_id'],
					'thumb'       => $image,
					'name'        => $result['name'],
					'description' => Helper\Utf8\substr(trim(strip_tags(html_entity_decode($result['description'], ENT_QUOTES, 'UTF-8'))), 0, $this->config->get('config_product_description_length')) . '..',
					'price'       => $price,
					'special'     => $special,
					'tax'         => $tax,
					'currency'    => $this->session->data['currency'],
					'minimum'     => $result['minimum'] > 0 ? $result['minimum'] : 1,
					'rating'      => $result['rating'],
					'href'        => $this->url->link('product/product', 'language=' . $this->config->get('config_language') . '&product_id=' . $result['product_id'])
				];

				$data['products'][] = $this->load->controller('product/thumb', $product_data);
			}

			return $this->load->view('extension/opencart/module/special', $data);
		} else {
			return '';
		}
	}
}
